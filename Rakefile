require 'rake-jekyll'

Rake::Jekyll::GitDeployTask.new(:deploy) do |t|

  # Description of the rake task.
  t.description = 'Generate the site and push changes to remote repository'

  # Overrides the *author* of the commit being created with author of the
  # source commit (i.e. HEAD in the current branch).
  t.author = -> {
    `git log -n 1 --format='%aN <%aE>'`.strip
  }
  # Overrides the *author date* of the commit being created with date of the
  # source commit.
  t.author_date = -> {
    `git log -n 1 --format='%aD'`.strip
  }
  # The commit message will contain hash of the source commit.
  t.commit_message = -> {
    "Built from #{`git rev-parse --short HEAD`.strip}"
  }
  # Use 'Jekyll' as the default *committer* name (with empty email) when the
  # user.name is not set in git config.
  t.committer = 'Jekyll'

  # Use the default committer (configured in git) when available.
  t.override_committer = false

end