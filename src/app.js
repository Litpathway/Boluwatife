(() => {
  'use strict';

  function Navbar() {
    const toggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.nav-links');
    const close = (restoreFocus = false) => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      navigation.classList.remove('is-open');
      if (restoreFocus) toggle.focus();
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      navigation.classList.toggle('is-open', open);
      if (open) navigation.querySelector('a').focus();
    });
    navigation.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') close(true);
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar') && toggle.getAttribute('aria-expanded') === 'true') close();
    });
    matchMedia('(min-width: 901px)').addEventListener('change', () => close());
    if ('IntersectionObserver' in window) {
      const homeLink = navigation.querySelector('a[href="#home"]');
      const workLink = navigation.querySelector('a[href="#work"]');
      const observer = new IntersectionObserver(([entry]) => {
        const inWork = entry.isIntersecting;
        homeLink.classList.toggle('active', !inWork);
        workLink.classList.toggle('active', inWork);
        homeLink.toggleAttribute('aria-current', !inWork);
        workLink.toggleAttribute('aria-current', inWork);
        (inWork ? workLink : homeLink).setAttribute('aria-current', 'page');
      }, { rootMargin: '-15% 0px -60% 0px' });
      observer.observe(document.querySelector('#work'));
    }
  }

  function ServicesAccordion() {
    const items = [...document.querySelectorAll('.service')];
    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        item.querySelector('summary').setAttribute('aria-expanded', String(item.open));
        if (item.open) items.forEach((other) => { if (other !== item) other.open = false; });
      });
      item.querySelector('summary').addEventListener('keydown', (event) => {
        const index = items.indexOf(item);
        let next;
        if (event.key === 'ArrowDown') next = (index + 1) % items.length;
        if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = items.length - 1;
        if (next !== undefined) { event.preventDefault(); items[next].querySelector('summary').focus(); }
      });
    });
  }

  function AboutPanel() {
    const dialog = document.querySelector('.about-dialog');
    let trigger;
    document.querySelectorAll('[data-about]').forEach((link) => link.addEventListener('click', (event) => {
      event.preventDefault();
      trigger = link;
      dialog.showModal();
      if (link.hash === '#experience') dialog.querySelector('#experience').scrollIntoView({ block: 'nearest' });
    }));
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (trigger && getComputedStyle(trigger).display !== 'none' && trigger.getClientRects().length) trigger.focus();
      else document.querySelector('.menu-toggle').focus();
    });
  }

  Navbar();
  ServicesAccordion();
  AboutPanel();
})();
