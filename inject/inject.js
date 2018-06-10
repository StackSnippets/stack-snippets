(function () {
  const template = decodeURI(code);
  const answerInputNode = document.getElementById('wmd-input');
  answerInputNode.value += template;
  answerInputNode.click();
  answerInputNode.scrollIntoView({ behavior: 'smooth', block: 'center' })
})();
