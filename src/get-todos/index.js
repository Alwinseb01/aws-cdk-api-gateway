/* eslint-disable @typescript-eslint/require-await */

async function main(event) {
  return {
    body: JSON.stringify([
      {todoId: 1, text: 'Item 1'},
      {todoId: 2, text: 'Item 2'},
    ]),
    statusCode: 200,
  };
}

module.exports = {main};
