

var cecilVisits = [{ "id": 193, "date": 20121015, "height": 73, "weight": 214, "ha1c": 5.9, "bloodPressureSystolic": 139, "bloodPressureDiastolic": 66 }, { "id": 193, "date": 20130604, "height": 73.2, "weight": 210, "ha1c": 6.2, "bloodPressureSystolic": 142, "bloodPressureDiastolic": 68 }, { "id": 193, "date": 20140326, "height": 73, "weight": 211, "ha1c": 6.8, "bloodPressureSystolic": 145, "bloodPressureDiastolic": 69 }, { "id": 193, "date": 20150210, "height": 72.8, "weight": 214, "ha1c": 6.9, "bloodPressureSystolic": 144, "bloodPressureDiastolic": 70 }, { "id": 193, "date": 20151011, "height": 72, "weight": 210, "ha1c": 7, "bloodPressureSystolic": 152, "bloodPressureDiastolic": 66 }, { "id": 193, "date": 20161110, "height": 72, "weight": 218, "ha1c": 7.2, "bloodPressureSystolic": 136, "bloodPressureDiastolic": 62 }, { "id": 193, "date": 20170304, "height": 73, "weight": 219, "ha1c": 7.1, "bloodPressureSystolic": 134, "bloodPressureDiastolic": 63 }, { "id": 193, "date": 20170406, "height": 73, "weight": 219, "ha1c": 7.2, "bloodPressureSystolic": 135, "bloodPressureDiastolic": 60 }];

CECIL_ID = 193;

function getVisits(id) {
  return request('GET', `http://localhost:3000/visits/${id}`);
}



// cycle thrugh cecils ha1c values
// if 5.7 or higher, do something

function start() {
  let visits = getVisits(CECIL_ID);
  visits.then(function (res) {
    let visits = res.getBody();
    console.log(visits);
    // check ha1c for most recent visit
    let visit = getMostRecentVisit(cecilVisits);
    checkA1C(visit);

  });


}

function checkA1C(visit) {

  // for (var i = 0; i < cecilVisits.length; i++) {
  let ha1c = visit.ha1c;

  if (ha1c >= 5.7) {
    document.getElementById("put-data-here").innerHTML = `A1C: ${ha1c} indicates pre-diabetes`
    // console.log("high enough to alert")
  }

  if (ha1c >= 6.5) {
    document.getElementById("put-data-here").innerHTML = `A1C: ${ha1c} indicates diabetes`
    // console.log("diabetes")
  }

  // }
}

function getMostRecentVisit(visits) {
  let mostRecentVisit = visits[0];

  for (var i = 0; i < visits.length; i++) {
    if (visits[i].date > mostRecentVisit.date) {
      mostRecentVisit = visits[i]
    }
  }
  return mostRecentVisit;
}

start();



