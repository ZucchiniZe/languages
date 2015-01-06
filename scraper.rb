require 'yaml'

file = YAML.load_file(Net::HTTP.get(URI.parse('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')))

puts '['

file.each do |lang|
  if lang[1].has_key?('color') == true
    puts "  [\"#{lang[0]}\", \"#{lang[1]['color']}\"],"
  else
    # p "#{lang[0]}: No color"
  end
end

puts ']'
