require 'net/http'
task :default do
  File.write('languages.yml', Net::HTTP.get(URI.parse('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')))
end
