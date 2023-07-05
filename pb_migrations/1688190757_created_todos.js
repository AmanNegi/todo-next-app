migrate((db) => {
  const collection = new Collection({
    "id": "zk24kx91r45eqnm",
    "created": "2023-07-01 05:52:35.890Z",
    "updated": "2023-07-01 05:52:35.890Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nakhqbgl",
        "name": "completed",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "h4jfeptc",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zk24kx91r45eqnm");

  return dao.deleteCollection(collection);
})
