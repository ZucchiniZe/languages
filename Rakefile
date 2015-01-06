require 'net/http'
task :default => :download

task :generate do
  sh 'rm -rf data.json'
  sh 'ruby scraper.rb > data.json'
end
