const FsMath = {
	DivGroup: function() {
		if(arguments.length == 0)
			return 0;
		if(arguments.length == 1)
			return arguments[0];
		let result = arguments[0];
		for(let i = 1; i < arguments.length; i++) {
			result = this.Div(result, arguments[i]);
		}
		return result;
	},
	Div: function(arg1, arg2) {
		let t1 = 0, t2 = 0, r1, r2;
		try {
			t1 = arg1.toString().split(".")[1].length;
		} catch(e) {
		}
		try {
			t2 = arg2.toString().split(".")[1].length;
		} catch(e) {
		}
		r1 = Number(arg1.toString().replace(".", ""));
		r2 = Number(arg2.toString().replace(".", ""));
		return this.Mul((r1 / r2), Math.pow(10, t2 - t1));
	},
	MulGroup: function() {
		if(arguments.length == 0)
			return 0;
		let result = 1;
		for(let i in arguments) {
			result = this.Mul(result, arguments[i]);
		}
		return result;
	},
	Mul: function(arg1, arg2) {
		let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length;
		} catch(e) {
		}
		try {
			m += s2.split(".")[1].length;
		} catch(e) {
		}
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	},
	SubGroup: function() {
		if(arguments.length == 0)
			return 0;
		if(arguments.length == 1)
			return arguments[0];
		let result = arguments[0];
		for(let i = 1; i < arguments.length; i++) {
			result = this.Sub(result, arguments[i]);
		}
		return result;
	},
	Sub: function(arg1, arg2) {
		let r1, r2, m, n;
		if(arg1 == null)
			arg1 = 0;
		if(arg2 == null)
			arg2 = 0;
		try {
			r1 = arg1.toString().split(".")[1].length;
		} catch(e) {
			r1 = 0;
		}
		try {
			r2 = arg2.toString().split(".")[1].length;
		} catch(e) {
			r2 = 0;
		}
		m = Math.pow(10, Math.max(r1, r2));
		n = (r1 >= r2) ? r1 : r2;
		return ((this.Mul(arg1, m) - this.Mul(arg2, m)) / m);
	},
	AddGroup: function() {
		if(arguments.length == 0)
			return 0;
		let result = 0;
		for(let i in arguments) {
			result = this.Add(result, arguments[i]);
		}
		return result;
	},
	Add: function(arg1, arg2) {
		let r1, r2, m, c;
		if(arg1 == null)
			arg1 = 0;
		if(arg2 == null)
			arg2 = 0;
		try {
			r1 = arg1.toString().split(".")[1].length;
		} catch(e) {
			r1 = 0;
		}
		try {
			r2 = arg2.toString().split(".")[1].length;
		} catch(e) {
			r2 = 0;
		}
		c = Math.abs(r1 - r2);
		m = Math.pow(10, Math.max(r1, r2));
		if(c > 0) {
			var cm = Math.pow(10, c);
			if(r1 > r2) {
				arg1 = Number(arg1.toString().replace(".", ""));
				arg2 = Number(arg2.toString().replace(".", "")) * cm;
			} else {
				arg1 = Number(arg1.toString().replace(".", "")) * cm;
				arg2 = Number(arg2.toString().replace(".", ""));
			}
		} else {
			arg1 = Number(arg1.toString().replace(".", ""));
			arg2 = Number(arg2.toString().replace(".", ""));
		}
		return (arg1 + arg2) / m;
	},
	floor: function(value, precision) {
		if(!precision)
			precision = 0;
		if(isNaN(precision))
			return "invalid precision";
		if(precision < 0)
			return "invalid precision";
		if(isNaN(value))
			return "invalid value";
		value = Number(value);
		let tmp = Math.pow(10, precision);
		value = this.Mul(value, tmp);
		value = Math.floor(value);
		value = this.Div(value, tmp);
		return value;
	}
}

export default FsMath;