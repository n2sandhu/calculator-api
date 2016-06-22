var hal = require('hal');

module.exports = function(Calculator) {

	Calculator.getLinks = function(cb){
		var resource = new hal.Resource({info: "Root Page"}, '/getLinks');
		resource.link('add', '/calculators/add?value1=2&value2=1');
		resource.link('subtract', '/calculators/subtract?value1=2&value2=1');
		resource.link('divide', '/calculators/divide?value1=2&value2=1');
		resource.link('multiply', '/calculators/multiply?value1=2&value2=1');
		cb(null, resource.toJSON());
	}

	Calculator.add = function(value1, value2, cb){
		var result = 0;
		result = value1 + value2;
		cb(null, result);
	};

	Calculator.subtract = function(value1, value2, cb){
		var result = 0;
		result = value1 - value2;
		cb(null, result);
	};

	Calculator.multiply = function(value1, value2, cb){
		var result = 0;
		result = value1 * value2;
		cb(null, result);
	};

	Calculator.divide = function(value1, value2, cb){
		var result = 0;
		if(value2 == 0){
			cb("Divided by zero", null);	
		}
		else{
			result = value1 / value2;
			cb(null, result);	
		}
	};

	Calculator.remoteMethod('add', {
	 	description:"This methods return the sum of value1 and value2",
	 	http:{verb:'get'},
        accepts:[{arg: 'value1',type:'number', required: true}, {arg: 'value2',type:'number', required: true}],
        returns: {arg: 'result', type: 'number', root:true}
    });
	
	Calculator.remoteMethod('subtract', {
	 	description:"This methods return the difference of value1 and value2",
	 	http:{verb:'get'},
        accepts:[{arg: 'value1',type:'number', required: true}, {arg: 'value2',type:'number', required: true}],
        returns: {arg: 'result', type: 'number', root:true}
    });
	
	Calculator.remoteMethod('multiply', {
	 	description:"This methods return the multiplication of value1 and value2",
	 	http:{verb:'get'},
        accepts:[{arg: 'value1',type:'number', required: true}, {arg: 'value2',type:'number', required: true}],
        returns: {arg: 'result', type: 'number', root:true}
    });
	
	Calculator.remoteMethod('divide', {
	 	description:"This methods return the division of value1 and value2",
	 	http:{verb:'get'},
        accepts:[{arg: 'value1',type:'number', required: true}, {arg: 'value2',type:'number', required: true}],
        returns: {arg: 'result', type: 'number', root:true}
    });

	Calculator.remoteMethod('getLinks', {
		http:{verb:'get'},
	 	description:"This methods returns the response including accessible links from current state",
        returns: {arg: 'response', type: 'object', root:true}
    });
};
