describe('FirstTest', function(){
    it('contains world', function(){
        expect(hello()).toContain('world');
    });
});

describe("ExpectedFunction", function(){
    it("calls hello()", function(){
        spyOn(obj,'hello');
        hello2();
        expect(hello()).toHaveBeenCalled();
    });
});

describe("InputParameters", function(){
    it("TestInputString", function(){
        let expected  = "hi";
        let result  = hello3(expected);
        expect(result).toEqual(expected);
    });

    it("TestInputInt", function(){
        let expected = 123;
        let result = hello3(expected);
        expect(result).toEqual(expected);
    });
});

describe("InputParametersCollercion", function(){
    it("Containts array another array", function(){        
        let result = hello3([1,2,3]);
        expect(result).toEqual(jasmine.arrayContaining([1,3]));
    });
});