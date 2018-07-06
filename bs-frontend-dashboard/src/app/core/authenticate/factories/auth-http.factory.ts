export function authHttpFactory() {
    return {
        tokenGetter: () => localStorage.getItem('access_token'),
        whitelistedDomains: ['localhost:8080'],
        throwNoTokenError: true
    };
}
