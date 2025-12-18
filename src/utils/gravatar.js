import md5 from 'md5';

export const getGravatarUrl = (email, size = 200, defaultImage = 'mp') => {
  if (!email) return '';
  
  const cleanEmail = email.trim().toLowerCase();
  const hash = md5(cleanEmail);
  
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=${defaultImage}`;
};