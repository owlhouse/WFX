require 'rack-canonical-host'

require ::File.expand_path('../config/environment',  __FILE__)

use Rack::CanonicalHost, 'owlhouse-interactive.com'
use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}