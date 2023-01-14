---
sidebar_position: 1
sidebar_label: Introduction
title: Introduction
description: Introduction to Warhorse, it's use case and features, and the history of it.
---

# Introduction

Warhorse consists of a fully-featured Ansible playbook to deploy infrastructure in the cloud for conducting security assessments. The Playbook combines Terraform & Ansible to deploy and configure virtual machines for a wide range of use cases. This Playbook is highly customizable and includes operational security. Experience with Ansible or Terraform is not required to use Warhorse.

## What is Warhorse and how does it help with security assessments?

The general goal of Warhorse is to speed up infrastructure deployment for security assessments. Currently, two primary use cases focus on C2 (Command & Control) servers and phishing. While Warhorse is not limited to these use cases, both require significant time to set up and benefit from a build-and-burn infrastructure deployment.

Warhorse is built on top of two infrastructure automation technologies. Ansible and Terraform. Both software excels at different aspects of infrastructure automation, and Warhorse combines them to accomplish its goals. Warhorse is not designed to replace these tools, and functionally Warhorse will continue to use both Ansible and Terraform to avoid reinventing the wheel.

What Warhorse does add to these tools is simplicity in deployment. Warhorse abstracts the Terraform and Ansible configuration and replaces the deployment with a single YAML file.

### Deployment workflow

1. You need a C2 server for a security assessment for example (Cobaltstrike)
2. You create a single YAML file for your deployment.
3. Warhorse takes this YAML file and creates Terraform and Ansible from your settings. (Generate)
4. You run the ansible-playbook deploy.yml and get a fully running C2 deployment with everything ready for your assessment.



## Features

As of right now, Warhorse features:

* Support for multipal cloud providers see [Providers](./providers/current)
* Ansible and Terraform backed.
* Very moduler though Ansible Roles and Terraform Providers
* 

## Planned features

* Simple CLI
* Web interface
* Git Runner Support

## About

