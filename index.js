const soap = require('soap')
const url = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
//const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?WSDL'

soap.createClient( url, (err, client) => {
	if(err){
	console.log(err)
	} else {
		client.consultaCEP({
			cep: '13050410'
		}, (err, res, rawResponse) => {
			console.log(res)
		})
	}
})
