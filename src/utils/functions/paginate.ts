const paginate = (query: any) => {
  const page = !!query.page ? parseInt(query.page) : 1;

  const limit = !!query.limit ? parseInt(query.limit) : 10;

  const startIndex = (page - 1) * limit;

  const endIndex = page * limit;

  return {
    startIndex,
    endIndex,
  };
};

export default paginate;
