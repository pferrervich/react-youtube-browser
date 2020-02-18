pipeline {
  agent any
  stages {
    stage('Inicio') {
      steps {
        echo 'Hola desde stage inicio'
      }
    }

    stage('Test2') {
      steps {
        mail(subject: 'Jenkins Pipeline', body: 'This is a test', to: 'pferrervich@pm.me')
      }
    }

  }
}