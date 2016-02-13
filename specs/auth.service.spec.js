describe('auth service with mocked HTTP', function() {
	var authService = {};
	var $httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function(_authService_, _$httpBackend_) {
	    authService = _authService_;
	    $httpBackend = _$httpBackend_;
	}));

	afterEach(function () {
	    $httpBackend.verifyNoOutstandingExpectation();
	    $httpBackend.verifyNoOutstandingRequest();
	})

	it('should return login ', function () {
	    var response;
	    var url = "http://localhost:48726/token";
	    var expectedData = { tdOrgCode: "", adiCode: "", isClient: "True", isProductManagement: "True" };

	    $httpBackend.when('POST', url).respond(200, expectedData);

	    authService.token('TestUser1', 'Password1', false).then(function (data) {
	        response = data;
	    });

	    $httpBackend.flush();

	    expect(response).toEqual(expectedData);
	});

});




