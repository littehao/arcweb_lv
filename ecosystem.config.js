module.exports = {
  apps : [{
    name      : 'app',
    script    : 'npm',
    args: "run start",
    node_args : "--harmony",
    "error_file"      : "logs/err.log",
    "out_file"        : "logs/out.log",
    "pid_file"        : "logs/pid.pid",
    "merge_logs"      : true,
    "log_date_format" : "YYYY-MM-DD HH:mm Z",
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      "HOST": "0.0.0.0",
      "PORT": 3000,
      NODE_ENV: 'production'
    },

     // max_memory_restart:500
  }],
  deploy : {
    production : {
      user : 'root',
      host : '',
      ref  : 'origin/master',
      repo : '',
      path : '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
