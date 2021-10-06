param (
    [parameter(Mandatory=$true)]
    [String]$githubtoken
)

# Push to live
git clone https://github.com/airelogic-dev/aireframe-doc.git
cp -r _site/* aireframe-doc/

git -C aireframe-doc  config user.email "danny.heard@airelogic.com"
git -C aireframe-doc  config user.name "Danny Heard"
git -C aireframe-doc  config push.default simple
git -C aireframe-doc  add --all

$date = Get-Date
git -C aireframe-doc  commit -m "Website auto build on ${date}"
git -C aireframe-doc  push https://$githubtoken@github.com/airelogic-dev/aireframe-doc.git