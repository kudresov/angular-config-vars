# Sample project illustrating how to inject env varialbes into AngularJs app

This app demonstrate a better way of injecting enviromental apps into angular using _gulp_ tasks.

## How to run

Simply run `node index` to run node server. This will also generate angular configuration file and place it in client folder. 
Configuration file is angular constant service with key value pairs for certain node env variables.
Process of injecting these values is done by gulp command: `config`. 

## gulp config

`gulp config` takes _config.json_ as default config and generates angular constant service. It will inject all the configs from _config.json_. If you want to override some of the value from the config or add new ones, add them to enviromental variables and `constants` in `configureSetup` (gulpfile.js).