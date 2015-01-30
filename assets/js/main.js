(function() {
  var homeWorks = {
    'Program Structure': 'js-lessons/js-basics-1',
    'Functions': 'js-lessons/js-basics-2',
    'Objects and Arrays': 'js-lessons/js-basics-3',
    'Higher order functions': 'js-lessons/js-basics-4'
  };

  var githubResults = [
    {
      repo: 'js-lessons/js-basics-1',
      build: {
        dimavetrov: 'failure',
        vorobey9: 'failure',
        kulinichdenis: 'success',
        Sazonova: 'failure',
        asdhomer: 'success',
        lush81: 'success',
        dneprm: 'success',
        Alytar: 'success',
        dennisreveni: 'success',
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success'
      }
    },
    {
      repo: 'js-lessons/js-basics-2',
      build:
        { dennisreveni: 'success',
          Alytar: 'failure',
          dneprm: 'success',
          Sazonova: 'success',
          kulinichdenis: 'success',
          KudryashovAV: 'success',
          'dmitriy-kiriyenko': 'success',
          MsSterh: 'failure'
      }
    },
    {
      repo: 'js-lessons/js-basics-3',
      build: {
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success',
        MsSterh: 'success'
      }
    },
    {
      repo: 'js-lessons/js-basics-4',
      build:{
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success',
        MsSterh: 'failure'
      }
    }
  ];

  var students = [
    { Name: 'Douglas Crockford', Github: 'dimavetrov' },
    { Name: 'Tony Morris', Github: 'vorobey9' },
    { Name: 'Slava Pestov', Github: 'kulinichdenis' },
    { Name: 'Graydon Hoare', Github: 'Sazonova' },
    { Name: 'Nikodemus Siivola', Github: 'asdhomer' },
    { Name: 'Max Bolingbroke', Github: 'lush81' },
    { Name: 'Daniel Spiewak', Github: 'dneprm' },
    { Name: 'Rich Hickey', Github: 'Alytar' },
    { Name: 'David Nolen', Github: 'dennisreveni' }
  ]

  function githubBuild(repoName, githubResults) {
    for (var i = 0; i < githubResults.length; i++) {
      if (githubResults[i].repo === repoName) return githubResults[i];
    }
  }

  function homeworkResults(githubResults, homeWorks) {
    var results = {};

    for (var title in homeWorks) {
      results[title] = githubBuild(homeWorks[title], githubResults).build;
    }

    return results;
  }

  function getResult(student, theme) {
    var results = homeworkResults(githubResults, homeWorks);

    getResult = function(student, theme) {
      switch(results[theme][student]) {
        case 'success': return '\u2713';
        case 'failure': return '\u2717';
        default: return '-';
      }
    }

    return getResult(student, theme);
  }

  function addHomeWorkResults(students) {
    var student;

    for (var i = 0; i < students.length; i++) {
      student = students[i];
      for (var hw in homeWorks) {
        student[hw] = getResult(student.Github, hw);
      }
    }

    return students;
  }

  var studentsTable = new Table(objectToRows(addHomeWorkResults(students))).draw();

  document.getElementById('students-list').innerHTML = studentsTable;
})();