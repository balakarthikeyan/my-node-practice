const dns = require("dns");
const website = "www.google.com";

// Call to lookup function of dns
dns.lookup(website, (err, address, family) => {
    console.log("Address of %s is %j family: IPv%s", website, address, family);
});

// Call to reverse function along with lookup function.
dns.lookup(website, function onLookup(err, address, family) {
    dns.reverse(address, function (err, hostnames) {
        console.log(
            "Reverse for " + address + ": " + JSON.stringify(hostnames)
        );
    });
});
