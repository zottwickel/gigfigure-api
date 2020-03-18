const xss = require('xss');

const CasesService = {
  getCasesbyUser(db, user_id) {
    return db
      .from('cases AS ca')
      .select('*')
      .where('ca.user_id', user_id)
      .leftJoin(
        'casecontacts AS caco',
        'ca.case_id',
        'caco.case_id'
      )
      .leftJoin(
        'contacts AS co',
        'caco.contact_id',
        'co.contact_id'
      )
      .groupBy('ca.case_id', 'caco.casecontact_id', 'co.contact_id')
      .orderBy('ca.case_id', 'desc');
  },
  insertCase(db, newCase) {
    return db
      .into('cases')
      .returning('*')
      .insert({
        case_notes: newCase.case_notes,
        date: newCase.date,
        user_id: newCase.user_id
      })
      .then(rows => {
        newCase.contacts.forEach(el => {
          return db
            .into('casecontacts')
            .insert({
              case_id: rows[0].case_id,
              contact_id: el.contact_id
            })
            .then(obj => obj[0]);
        });
      });
  },
  serializeCases(cases) {
    const response = [];
    cases.forEach(singleCase => {
      let simCases = cases.filter(i => singleCase.case_id === i.case_id);
      let newCase;
      for (i=0;i<simCases.length;i++) {
        if (i === 0) {
          newCase = {
            case_id: simCases[0].case_id,
            case_notes: xss(simCases[0].case_notes),
            date: new Date(simCases[0].date),
            user_id: simCases[0].user_id,
            contacts: [{
              contact_id: simCases[0].contact_id,
              name: xss(simCases[0].name),
              type: xss(simCases[0].type),
              subtype: xss(simCases[0].subtype),
              phone: xss(simCases[0].phone),
              email: xss(simCases[0].email),
              notes: xss(simCases[0].notes),
              date_modified: new Date(simCases[0].date_modified),
            }]
          };
        } else {
          newCase.contacts.push({
            contact_id: simCases[i].contact_id,
              name: xss(simCases[i].name),
              type: xss(simCases[i].type),
              subtype: xss(simCases[i].subtype),
              phone: xss(simCases[i].phone),
              email: xss(simCases[i].email),
              notes: xss(simCases[i].notes),
              date_modified: new Date(simCases[i].date_modified),
          });
        }
      }
      response.push(newCase);
    });
    const newResponse = [];
    newResponse.push(response[0]);
    for (j=1;j<response.length;j++) {
      if (response[j-1].case_id != response[j].case_id) {
        newResponse.push(response[j]);
      }
    }
    return newResponse;
  }
};

module.exports = CasesService;