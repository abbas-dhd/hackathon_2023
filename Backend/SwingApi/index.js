const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };

  try {
    switch (event.httpMethod) {
      case "DELETE":
        await dynamo
          .delete({
            TableName: "orionvideo",
            Key: {
              id: event.pathParameters.id
            }
          })
          .promise();
        body = `Deleted product ${event.pathParameters.id}`;
        break;
      case "GET":
         // body = await dynamo.scan({ TableName: "orionvideo" }).promise();
        if (event.pathParameters != null) {
            body = await dynamo
              .get({
                TableName: "orionvideo",
                Key: {
                  id: event.pathParameters.id
                }
              })
              .promise();
        } else {
            body = await dynamo.scan({ TableName: "orionvideo" }).promise();
        }
        break;
      case "POST":
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: "orionvideo",
            Item : requestJSON
            // Item: {
            //   id: requestJSON.id,
            //   price: requestJSON.price,
            //   title: requestJSON.title,
            //   description: requestJSON.description,
            // }
          })
          .promise();
        body = `Added/Updated product ${requestJSON.id}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.httpMethod}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};