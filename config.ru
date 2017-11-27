use Rack::Static,
  :urls => ["/images", "/js", "/css", "/partners-images", "/other-images"],
  :root => "public"

map "/" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/index-min.html', File::RDONLY)
    ]
  }
end

map "/terms" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/terms/index.html', File::RDONLY)
    ]
  }
end

map "/partners" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'application/pdf',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/docs/partners.pdf', File::RDONLY)
    ]
  }
end

map "/giveaway" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/giveaway.html', File::RDONLY)
    ]
  }
end

map "/charlotte" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/charlotte-min.html', File::RDONLY)
    ]
  }
end

map "/rules" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/rules-min.html', File::RDONLY)
    ]
  }
end

map "/rep" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/rep-min.html', File::RDONLY)
    ]
  }
end