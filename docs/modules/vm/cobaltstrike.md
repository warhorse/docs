# Cobaltstrike

```yaml
azurcobaltstrike:
        # dir: "/opt/docker/cobaltstrike" optional
        dns_over_https: true # Adds DNS records
        # auth_header_name: "cdnauth" 
        # auth_header_value: "{{ '2023-001' | b64encode }}"
        password: "Password"
        key: "0000-0000-0000-0000"
        socks_ports: 
        - 9201
        - 9202
        - 9203
        # redirector:
        cdn:
        - name: "azure_cobalt"
          provider: "azure"
          hostname: "azurehost"
          redirect_url: "azure.microsoft.com"
        - name: "aws_cobalt"
          provider: "aws"
          redirect_url: "https://aws.com"
          count: 20
```
