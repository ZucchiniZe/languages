require 'yaml'

file = YAML.load_file('languages.yml')

File.open('data.json', 'w') do |f|
  f.puts '['

  file.each_with_index do |lang, i|
    if i == file.size - 1
      f.puts "  [\"#{lang[0]}\", \"#{lang[1]['color']}\"]"
    else
      if lang[1].has_key?('color') == true
        f.puts "  [\"#{lang[0]}\", \"#{lang[1]['color']}\"],"
      end
    end
  end

  f.puts ']'
end
