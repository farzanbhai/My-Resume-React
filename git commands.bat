this project git commands .. 



git rm --cached .env

echo .env >> .gitignore

git add .gitignore

git commit -m "Removed .env file and updated .gitignore"

git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env" --prune-empty --tag-name-filter cat -- --all

git push origin main --force

