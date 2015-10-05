
/*
 * GET home page.
 */

var data = {
	owner : 'ING. Elvis Victor Zacornea',
	email : 'office@urbancad.ro',
	phone : '+40756597125',
	author: 'Baetu Ioan-Alexandru',
	title : 'UrbanCAD',
	city  : 'Iasi',
	firm : {
		name : 'SC URBANCAD SRL',
		CUI : '',
		address : 'str. ANASTASIE PANU nr. 27, bl. Moldova 1-3, parter (reper actual - Loto Prono)',
		postalcode : '700023'
	}

};


exports.index = function(req, res){
  data.page = 'index';
  res.render('index', data );
}

exports.contact = function(req,res){
  data.page = 'contact';
  res.render('contact', data );	
}

exports.legislatie = function(req,res){
  data.page = 'legislatie';
	data.laws = [];
	data.laws.push({ name: 'LEGEA NR. 7/1996 - legea cadastrului si a publicitatii imobiliare (126)', link : 'http://www.cadastruiniasi.ro/wp-content/plugins/download-monitor/download.php?id=12' });
	data.laws.push({ name: 'ORDIN NR. 634/2006 - pentru aprobarea Regulamentului privind continutul si modul de intocmire a documentatiilor cadastrale in vederea inscrierii in cartea funciara (93)', link : 'http://www.cadastruiniasi.ro/wp-content/plugins/download-monitor/download.php?id=13' });
	data.laws.push({ name: 'LEGEA NR. 247/2005 - privind reforma in domeniile proprietatii si justitiei, precum si unele masuri adiacente (106)', link : 'http://www.cadastruiniasi.ro/wp-content/plugins/download-monitor/download.php?id=14' });
	data.laws.push({ name: 'LEGEA NR. 18/1991 - legea fondului funciar (89)', link : 'http://www.cadastruiniasi.ro/wp-content/plugins/download-monitor/download.php?id=15' });
  res.render('legislatie', data );
}

exports.servicii = function(req,res){
  data.page = 'servicii';
  res.render('servicii', data );
}

exports.intrebari = function(req,res){
  data.page = 'intrebari';
  res.render('intrebari', data );
}


