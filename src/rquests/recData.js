export const reqAnyPage = async (type) => {
  const page = await fetch(`https://swapi.dev/api/${type}`);
  return await page.json();
};

export const reqObjNumb = async (type) => {
  const pageData = await reqAnyPage(type);
  return pageData.count;
};

export const reqCharById = async (type, id) => {
  const charData = await fetch(`https://swapi.dev/api/${type}/${id}`);
  return await charData.json();
};

export const reqRndmChar = async (type) => {
  const totalChar = await reqObjNumb(type);
  const rndmId = Math.floor(Math.random() * totalChar) + 1;
  const rndmChar = await reqCharById(type, rndmId);
  return rndmChar;
};

export const reqFilters = async () => {
  const getFilters = await fetch(`https://swapi.dev/api`);
  const filterArray = Object.keys(await getFilters.json());
  return filterArray;
};

export const reqNumbPage = async (type, numb) => {
  let getNumbPage = [];
  if (!numb) {
    getNumbPage = await fetch(`https://swapi.dev/api/${type}`);
  } else {
    getNumbPage = await fetch(`https://swapi.dev/api/${type}/?page=${numb}`);
  }

  const pageData = await getNumbPage.json();
  console.log(pageData);
  return pageData;
};
