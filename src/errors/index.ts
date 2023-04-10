function unprocessableEntityError(message) {
  return {
    name: "UnprocessableEntityError",
    message,
  };
}

function invalidId() {
  return {
    name: "InvalidId",
    message: "Invalid format of id",
  };
}

export default {
  unprocessableEntityError,
  invalidId,
};
