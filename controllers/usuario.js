//const {response} = require ("express");


const userGet = (req, res) => {
    const query = req.query
    res.json({ 
        "msj": 'Hello World!',
        query
    });
  }

  const userPost = (req, res) => {
    const body = req.body 
    res.json({ 
        "msj": 'Post!',
        body
    });
  }

  const userPut = (req, res) => {
    const id = req.params // direccion .params
    res.json({ 
        "msj": 'Put!',
        id
    });
  }

  const userDelete = (req, res) => {
    res.json({ 
        "msj": 'Delete!',
    });
  }

  //get,put.. se exportan
  module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
  }