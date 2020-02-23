// Dependency Inversion
// ? High-level modules should not depend upon low-level modules. Both should depend upon abstractions


// ! this is example of a wrong implementation to Dependency Inversion , as HTTP depends on a low-level class (HTTPService) not abstraction

class XMLHttpService extends XMLHttpRequestService {}
class Http {
    constructor(private xmlhttpService: XMLHttpService) { }
    get(url: string , options: any) {
        this.xmlhttpService.request(url,'GET');
    }
    post() {
        this.xmlhttpService.request(url,'POST');
    }
    //...
}

// ? this is example of a correct implementation to Dependency Inversion , now the HTTP class depends on Connection interface not a low-level class

interface Connection {
    request(url: string, opts:any);
}

class XMLHttpService implements Connection {
    const xhr = new XMLHttpRequest();
    //...
    request(url: string, opts:any) {
        xhr.open();
        xhr.send();
    }
}

class NodeHttpService implements Connection {
    request(url: string, opts:any) {
        //...
    }
}
class MockHttpService implements Connection {
    request(url: string, opts:any) {
        //...
    }    
}

class Http {
    constructor(private httpConnection: Connection) { }
    get(url: string , options: any) {
        this.httpConnection.request(url,'GET');
    }
    post() {
        this.httpConnection.request(url,'POST');
    }
    //...
}
