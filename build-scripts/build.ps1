gem install bundler:2.1.4 
bundle install
$env:JEKYLL_ENV = 'production'; bundle exec jekyll build -t  --config _config.yml
#bundle exec htmlproofer ./_site --url-ignore "/#.*/,/http://.*/,/https://.*/"