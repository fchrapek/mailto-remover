const removeMailto = () => {
  const mailToLinks = [...document.querySelectorAll('a[href^="mailto:"]')];

  if (mailToLinks.length === 0) return;

  mailToLinks.forEach(mailto => {
    mailto.addEventListener('click', e => {
      e.preventDefault();
      const emailWithMailTo = mailto.href;
      const emailWithoutMailTo = emailWithMailTo.replace('mailto:', '');

      copyToClipboard(emailWithoutMailTo);
    })
  })
}

const copyToClipboard = (text) => {
  const dummyInput = document.createElement("input");
  document.body.appendChild(dummyInput);
  dummyInput.setAttribute('value', text);
  dummyInput.select();
  navigator.clipboard.writeText(text);
  document.body.removeChild(dummyInput);
}

removeMailto();

document.querySelector('.shrinking-menu').addEventListener('click', () => {
  document.body.style.zoom = "100%";
})
