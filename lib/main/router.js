import templateEngine from 'icndb/utils/templating';

function setView(path, context, next) {
  System.import(`${path}!text`).then(function (view) {
    var content = document.getElementById('content');
    content.innerHTML = view;
    templateEngine.bind(content, { cn: context });
    next();
  });
}


var routes = {
  '/main': function (next) {
    setView('icndb/main/templates/main.html', {
      name: 'DCS team'
    }, next);
  },

  '/jokesList': {
    on: function (next) {
      var context = {
        defaultNumberOfJokes: 3
      };
      window.context = context;
      setView('icndb/main/templates/jokesList.html', context, next);
    }
  }
};


var router = Router(routes);

router.configure({
  async: true,

  //before: function (next) {
  //  console.log('before routing', arguments, router.getRoute());
  //
  //  setTimeout(function () {
  //    // do some magic async permission evaluation thingie
  //    console.log('permission granted');
  //    next();
  //  }, 1000);
  //
  //  //next();
  //},

  notfound: function () {
    console.log('route not found', arguments);
    router.setRoute('main');
  }
});

// if on root URL / then move to the base hash URL
if (! window.location.hash) {
  window.location.hash = '#/'
}

router.init();


export default router;
