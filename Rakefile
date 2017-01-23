require 'rake-jekyll'

# This task builds the Jekyll site and deploys it to a remote Git repository.
# It's preconfigured to be used with GitHub and Travis CI.
# See http://github.com/jirutka/rake-jekyll for more options.
Rake::Jekyll::GitDeployTask.new(:deploy) do |t|

# Description of the rake task.
t.description = 'Generate the site and push changes to remote repository'

# Overrides the *author* of the commit being created with author of the
  # source commit (i.e. HEAD in the current branch).
  t.author = -> {
    `git log -n 1 --format='%aN <%aE>'`.strip
  }

# Use 'Jekyll' as the default *committer* name (with empty email) when the
# user.name is not set in git config.
t.committer = 'pilarargudo'
t.email = 'pargudo@disid.com'

# Use the default committer (configured in git) when available.
t.override_committer = true

# adapted from https://github.com/imathis/octopress/blob/master/Rakefile
# usage rake new_post['My New Post'] or rake new_post (defaults to "My New Post")
  desc "Start a new post"
  task :new, :title do |t, args|
   args.with_defaults(:title => 'My New Post')
   title = args.title
   filename = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{title.downcase.gsub(/&/,'and').gsub(/[,'":\?!\(\)\[\]]/,'').gsub(/[\W\.]/, '-').gsub(/-+$/,'')}.md"
   puts "Creating new post: #{filename}"
   open(filename, 'w') do |post|
     post.puts "---"
     post.puts "layout: post"
     post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
     post.puts "description: "
     post.puts "headline: "
     post.puts "modified: #{Time.now.strftime('%Y-%m-%d')}"
     post.puts "category: personal"
     post.puts "tags: []"
     post.puts "image: "
     post.puts "  feature: "
     post.puts "mathjax: "
     post.puts "---"
   end
  end

  desc "Start a new quote"
  task :newquote, :title do |t, args|
   args.with_defaults(:title => 'My New quote')
   title = args.title
   filename = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{title.downcase.gsub(/&/,'and').gsub(/[,'":\?!\(\)\[\]]/,'').gsub(/[\W\.]/, '-').gsub(/-+$/,'')}.md"
   puts "Creating new post: #{filename}"
   open(filename, 'w') do |post|
     post.puts "---"
     post.puts "layout: post"
     post.puts "type: quote"
     post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
     post.puts "description: "
     post.puts "headline: "
     post.puts "modified: #{Time.now.strftime('%Y-%m-%d')}"
     post.puts "category: quotes"
     post.puts "tags: []"
     post.puts "image: "
     post.puts "  feature: "
     post.puts "mathjax: "
     post.puts "---"
   end
  end

  desc "Start a new status"
  task :newstatus, :title do |t, args|
   args.with_defaults(:title => 'My New Post')
   title = args.title
   filename = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{title.downcase.gsub(/&/,'and').gsub(/[,'":\?!\(\)\[\]]/,'').gsub(/[\W\.]/, '-').gsub(/-+$/,'')}.md"
   puts "Creating new post: #{filename}"
   open(filename, 'w') do |post|
     post.puts "---"
     post.puts "layout: post"
     post.puts "type: status"
     post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
     post.puts "description: "
     post.puts "headline: "
     post.puts "modified: #{Time.now.strftime('%Y-%m-%d')}"
     post.puts "category: status"
     post.puts "tags: []"
     post.puts "image: "
     post.puts "  feature: "
     post.puts "mathjax: "
     post.puts "---"
   end
  end

    # adapted from https://github.com/imathis/octopress/blob/master/Rakefile
  # usage rake new_post['My New Post'] or rake new_post (defaults to "My New Post")
  desc "Start a new page"
  task :newpage, :title do |t, args|
   args.with_defaults(:title => 'My New page')
   title = args.title
   filename = "#{title.downcase.gsub(/&/,'and').gsub(/[,'":\?!\(\)\[\]]/,'').gsub(/[\W\.]/, '-').gsub(/-+$/,'')}.md"
   puts "Creating new page: #{filename}"
   open(filename, 'w') do |post|
     post.puts "---"
     post.puts "layout: page"
     post.puts "permalink: #{title.downcase.gsub(/&/,'and').gsub(/[,'":\?!\(\)\[\]]/,'').gsub(/[\W\.]/, '-').gsub(/-+$/,'')}/index.html"
     post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
     post.puts "description: "
     post.puts "headline: "
     post.puts "modified: #{Time.now.strftime('%Y-%m-%d')}"
     post.puts "tags: []"
     post.puts "image: "
     post.puts "  feature: "
     post.puts "mathjax: "
     post.puts "---"
   end
  end
