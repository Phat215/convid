// -----------------------------------------------
// MODAL - POPUP
// -----------------------------------------------

// Popup Modal Need Load data at first
window.addEventListener('load',() => {
	loadDataPopupAtFirst();
});
function loadDataPopupAtFirst(){
	fetch("./lang/en.json")
		.then(data => data.json())
		.then(dataEN => {
			loadDataPopup(dataEN);
		})
		.catch(e => console.log(e));
}

$("#txtAboutData").change(function(){
	target = $(this).val();
	// About The Data
	if(target=="AboutTheData"){
		$("#imgCfmCovid").attr("src", "https://img.icons8.com/bubbles/2x/question-mark.png");
		ToggleOrHide("#viewModalData");
		$(this).val('');
	}
	// Vaccine Details
	if(target=="VaccineDetails"){
		$("#imgVaccineDetails").attr("src", "https://biomedicalodyssey.blogs.hopkinsmedicine.org/files/2020/11/GettyImages-1214508941.jpg");
		ToggleOrHide("#viewModalVaccineDetails");
		$(this).val('');
	}
	// Vaccine Technology
	if(target=="VaccineTechnology"){
		$("#imgVaccine").attr("src", "https://www.atascientific.com.au/wp-content/uploads/2021/02/COVID-vaccine.jpg");
		ToggleOrHide("#viewModalVaccine");
		$(this).val('');
	}
	// Coronavirus Variant
	if(target=="CoronavirusVariant"){
		ToggleOrHide("#viewModalVariant");
		$(this).val('');
	}
	// Treatment Medicine
	if(target=="TreatmentMedicine"){
		ToggleOrHide("#viewModalMedicine");
		$(this).val('');
	}
	// Software Info
	if(target=="SoftwareInfo"){
		ToggleOrHide("#viewModalGuide");
		$(this).val('');
	}
});

//VNMAP
$("#vnName").click(function(){ToggleOrHide("#viewModalMap");});
$(".btnMapDiv").click(function(){ToggleOrHide("#viewModalMap");});


function ToggleOrHide(idModal){
	$(idModal).modal("toggle");
	$(document).keydown(function(e){if(e.keyCode == 27){$(idModal).modal("hide");}});
}

