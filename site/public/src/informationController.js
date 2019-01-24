function retrievePatientInformation(){

    var url = "./info";
    var params = "id=<patientid>";

    var http = new XMLHttpRequest();

    http.open("GET", url+"?"+params, true);

    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200) {

            var patientdata = JSON.parse(http.responseText);

            var patientname = document.getElementById('name');
            patientname.innerHTML = patientdata.personal.name;

            var appointments = document.getElementById('appointments');

            patientdata.appointments.forEach( function(appointment){
              var box = document.createElement('div');
              box.className = 'boxitem';
              box.innerHTML = '<img class="stethascope" src="/images/stethascope.svg"><div class="boxitemlabel">' + appointment + '</div>'
                appointments.appendChild(box);
            })

            var medications = document.getElementById('medications');

            patientdata.medications.forEach( function(medication){
              var box = document.createElement('div');
              box.className = 'boxitem';
              box.innerHTML = '<img class="beaker" src="/images/beaker.svg"><div class="boxitemlabel">' + medication + '</div>'
              medications.appendChild(box);
            })
        }
    }
    http.send(null);
}
