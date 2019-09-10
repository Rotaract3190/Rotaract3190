# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "rotaract3190"
  spec.version       = "0.1.0"
  spec.authors       = ["zeospec"]
  spec.email         = ["zeospec@users.noreply.github.com"]

  spec.summary       = %q{Rotaract District Organisation | Rotary International District 3190}
  spec.homepage      = "https://rotaract3190.org/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|LICENSE|README)/i}) }

  spec.add_development_dependency "jekyll", "~> 3.8.5"
  spec.add_development_dependency "bundler", "~> 2.0.1"
  spec.add_development_dependency "rake", "~> 12.3.1"
end
