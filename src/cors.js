// src/cors.js
export function handleCors(request, response, allowedOrigins) {
    const origin = request.headers.origin;
    if (allowedOrigins.includes(origin)) {
      // The origin is in the list of allowed origins, so set the appropriate CORS headers
      const corsHeaders = {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      };
  
      if (request.method === 'OPTIONS') {
        // Preflight request, respond with only the CORS headers
        return {
          status: 200,
          headers: corsHeaders,
        };
      }
  
      // Continue with the actual request
      return {
        headers: corsHeaders,
      };
    } else {
      // The origin is not in the list of allowed origins, so deny the request
      return {
        status: 403,
        body: 'Forbidden',
      };
    }
  }