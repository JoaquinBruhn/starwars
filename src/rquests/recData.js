export const reqAnyPage = async (type) => {
  const page = await fetch(`https://swapi.dev/api/${type}`);
  return await page.json();
};

export const reqObjNumb = async (type) => {
  const pageData = await reqAnyPage(type);
  return pageData.count;
};

export const reqChar = async (type, id) => {
  const charData = await fetch(`https://swapi.dev/api/${type}/${id}`);
  return await charData.json();
};

export const reqRndmChar = async (type) => {
  const totalChar = await reqObjNumb(type);
  const rndmId = Math.floor(Math.random() * totalChar) + 1;
  const rndmChar = await reqChar(type, rndmId);
  return rndmChar;
};
