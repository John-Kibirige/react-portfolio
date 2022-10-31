const isEmail = (emailAdress) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) return true;
  else return false;
};

const isEmpty = (field) => {
  field = field.replace(/\s+/g, '');
  return field.length === 0;
};

export { isEmail, isEmpty };
