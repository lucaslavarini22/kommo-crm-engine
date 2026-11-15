/**
 * Tipagens TypeScript da Árvore de Atendimento (Salesbot Visual Builder)
 * Mapeadas diretamente a partir do motor DAG do Kommo CRM
 */

export type ChannelType = 'whatsapp' | 'instagram' | 'telegram' | 'facebook' | 'webchat';

export type TriggerType = 
  | 'incoming_message'
  | 'keyword_match'
  | 'story_mention'
  | 'pipeline_stage_changed'
  | 'timer_inactivity';

export interface TriggerConfig {
  type: TriggerType;
  channel?: ChannelType;
  keywords?: string[];
  pipelineId?: string;
  stageId?: string;
  inactivityHours?: number;
}

export type NodeType = 
  | 'message'
  | 'quick_reply'
  | 'input_prompt'
  | 'condition'
  | 'crm_action'
  | 'delay_human'
  | 'human_handover';

export interface QuickReplyOption {
  id: string;
  label: string;
  synonyms?: string[]; // Sinônimos digitados pelo usuário (ex: '1', 'orçamento', 'preço')
  url?: string;
  nextNodeId: string;
}

export interface ConditionRule {
  field: string; // Ex: 'lead.email', 'lead.revenue'
  operator: '==' | '!=' | '>' | '<' | '>=' | '<=' | 'contains' | 'is_empty';
  value: string | number | boolean;
  nextNodeId: string;
}

export type CRMActionType =
  | 'add_tag'
  | 'remove_tag'
  | 'move_stage'
  | 'update_field'
  | 'assign_responsible'
  | 'create_task'
  | 'webhook_post';

export interface CRMAction {
  action: CRMActionType;
  params: Record<string, any>;
}

export interface BotNode {
  id: string;
  type: NodeType;
  title: string;
  content?: string;
  mediaUrl?: string;
  options?: QuickReplyOption[];
  rules?: ConditionRule[];
  fallbackNodeId?: string;
  actions?: CRMAction[];
  delaySeconds?: number;
}

export interface SalesbotWorkflow {
  id: string;
  name: string;
  description?: string;
  active: boolean;
  trigger: TriggerConfig;
  entryNodeId: string;
  nodes: Record<string, BotNode>;
  createdAt: string;
  updatedAt: string;
}
