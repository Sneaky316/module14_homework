const xml = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// Функция для преобразования XML-строки в JS-объект
function xmlToJs(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  const listElement = xmlDoc.querySelector('list');

  const students = Array.from(listElement.querySelectorAll('student')).map(studentElement => {
    const nameElement = studentElement.querySelector('name');
    const langAttr = nameElement.getAttribute('lang');
    const firstName = nameElement.querySelector('first').textContent;
    const secondName = nameElement.querySelector('second').textContent;
    const age = parseInt(studentElement.querySelector('age').textContent);
    const prof = studentElement.querySelector('prof').textContent;

    return {
      name: `${firstName} ${secondName}`,
      age,
      prof,
      lang: langAttr,
    };
  });

  return { list: students };
}

const result = xmlToJs(xml);
console.log(result);
