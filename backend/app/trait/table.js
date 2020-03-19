const pool = require('../../databasePool');

class TraitTable{
  static getTraitId({traitType, traitValue}){
    return new Promise((resolve, reject) => {
      pool.query(`SELECT id FROM traits
      WHERE "traitType" = $1 AND "traitValue" = $2`,
      [traitType, traitValue],
      (error, response) => {
        if (error) return reject(error);

        const trait = response.rows[0].id;

        resolve({traitId: trait});
      })
    });
  }
}



module.exports = TraitTable;
