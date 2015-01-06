task :default => :generate

task :generate do
  sh 'rm -rf data.json'
  sh 'ruby scraper.rb > data.json'
end
