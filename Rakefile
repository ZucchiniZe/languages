require 'net/http'
task :default => :download

task :download do
  File.write('languages.yml', Net::HTTP.get(URI.parse('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')))
end

task :generate do
  sh 'rm -rf data.json'
  sh 'ruby scraper.rb > data.json'
end
