if (!!window.EventSource) {
  var host = window.location.host;
  if (host.indexOf(':') >= 0) { host = host.split(':')[0] }
  var source = new EventSource(window.location.protocol + '//' + host + ':5553/fs');
  source.addEventListener('message', function(e) {
    const path = '/' + e.data
    if (path.indexOf(window.location.pathname) >= 0) { location.reload() }
  }, false);
}
