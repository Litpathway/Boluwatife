$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
$sourceRoot = Join-Path $projectRoot 'src'
$outputRoot = Join-Path $projectRoot 'dist'
$utf8 = New-Object System.Text.UTF8Encoding($false)
function Read-Source([string]$name) { [IO.File]::ReadAllText((Join-Path $sourceRoot $name)) }
function Get-DataUri([string]$relativePath, [string]$mime) {
  $assetPath = Join-Path $projectRoot $relativePath
  if (!(Test-Path -LiteralPath $assetPath)) { throw "Required asset missing: $relativePath" }
  'data:' + $mime + ';base64,' + [Convert]::ToBase64String([IO.File]::ReadAllBytes($assetPath))
}
$page = Read-Source 'index.html'
$styles = (Read-Source 'styles.css').Replace('{{FONT}}', (Get-DataUri 'assets/fonts/manrope.ttf' 'font/ttf'))
$page = $page.Replace('/* BUILD:STYLES */', $styles).Replace('/* BUILD:SCRIPT */', (Read-Source 'app.js'))
$page = $page.Replace('{{PORTRAIT}}', (Get-DataUri 'assets/daniel-cutout.png' 'image/png'))
$page = $page.Replace('{{HUB}}', (Get-DataUri 'assets/Hub-screen.png' 'image/png'))
$page = $page.Replace('{{KOVA}}', (Get-DataUri 'assets/kova-screen.png' 'image/png'))
if ($page.Contains('{{') -or $page.Contains('/* BUILD:')) { throw 'Unresolved source placeholder.' }
New-Item -ItemType Directory -Force -Path $outputRoot | Out-Null
[IO.File]::WriteAllText((Join-Path $outputRoot 'index.html'), $page, $utf8)
$license = [IO.File]::ReadAllText((Join-Path $projectRoot 'assets/fonts/manrope-OFL.txt'))
[IO.File]::WriteAllText((Join-Path $outputRoot 'FONT-LICENSE.txt'), $license, $utf8)
Write-Output "Built dist/index.html (standalone, all fonts and images embedded)."
