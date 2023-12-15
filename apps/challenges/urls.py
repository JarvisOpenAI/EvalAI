from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        r"^challenge_host_team/(?P<challenge_host_team_pk>[0-9]+)/challenge$",
        views.challenge_list,
        name="get_challenge_list",
    ),
    url(
        r"^challenge_host_team/(?P<challenge_host_team_pk>[0-9]+)/challenge/(?P<challenge_pk>[0-9]+)$",
        views.challenge_detail,
        name="get_challenge_detail",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/participant_team/team_detail$",
        views.participant_team_detail_for_challenge,
        name="participant_team_detail_for_challenge",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/participant_team/(?P<participant_team_pk>[0-9]+)$",
        views.add_participant_team_to_challenge,
        name="add_participant_team_to_challenge",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/disable$",
        views.disable_challenge,
        name="disable_challenge",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/challenge_phase$",
        views.challenge_phase_list,
        name="get_challenge_phase_list",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/challenge_phase/(?P<pk>[0-9]+)$",
        views.challenge_phase_detail,
        name="get_challenge_phase_detail",
    ),
    # `A-Za-z` because it accepts either of `all, future, past or present` in either case
    url(
        r"^challenge/(?P<challenge_time>[A-Za-z]+)/(?P<challenge_approved>[A-Za-z]+)/(?P<challenge_published>[A-Za-z]+)$",
        views.get_all_challenges,
        name="get_all_challenges",
    ),
    url(
        r"^challenge/get_submission_metrics$",
        views.get_all_challenges_submission_metrics,
        name="get_all_challenges_submission_metrics",
    ),
    url(
        r"^challenges/participated/(?P<challenge_time>[A-Za-z]+)/$",
        views.get_all_participated_challenges,
        name="get_all_participated_challenges",
    ),
    url(
        r"^featured/$",
        views.get_featured_challenges,
        name="get_featured_challenges",
    ),
    url(
        r"^challenge/(?P<pk>[0-9]+)/$",
        views.get_challenge_by_pk,
        name="get_challenge_by_pk",
    ),
    url(
        r"^home$",
        views.get_challenge_home,
        name="get_challenge_home",
    ),
    url(
        r"^challenge$",
        views.get_challenges_based_on_teams,
        name="get_challenges_based_on_teams",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/request_approval",
        views.request_challenge_approval_by_pk,
        name="request_challenge_approval_by_pk",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/challenge_phase_split$",
        views.challenge_phase_split_list,
        name="challenge_phase_split_list",
    ),
    url(
        r"^challenge/challenge_host_team/(?P<challenge_host_team_pk>[0-9]+)/zip_upload/$",
        views.create_challenge_using_zip_file,
        name="create_challenge_using_zip_file",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/challenge_phase/(?P<challenge_phase_pk>[0-9]+)/submissions$",
        views.get_all_submissions_of_challenge,
        name="get_all_submissions_of_challenge",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/phase/(?P<challenge_phase_pk>[0-9]+)"
        r"/download_all_submissions/(?P<file_type>[A-Za-z]+)/$",
        views.download_all_submissions,
        name="download_all_submissions",
    ),
    url(
        r"^challenge/create/leaderboard/step_2/$",
        views.create_leaderboard,
        name="create_leaderboard",
    ),
    url(
        r"^challenge/create/leaderboard/(?P<leaderboard_pk>[0-9]+)/$",
        views.get_or_update_leaderboard,
        name="get_or_update_leaderboard",
    ),
    url(
        r"^challenge/create/dataset_split/step_4/$",
        views.create_dataset_split,
        name="create_dataset_split",
    ),
    url(
        r"^challenge/create/dataset_split/(?P<dataset_split_pk>[0-9]+)/$",
        views.get_or_update_dataset_split,
        name="get_or_update_dataset_split",
    ),
    url(
        r"^challenge/create/challenge_phase_split/step_5/$",
        views.create_challenge_phase_split,
        name="create_challenge_phase_split",
    ),
    url(
        r"^challenge/create/challenge_phase_split/(?P<challenge_phase_split_pk>[0-9]+)/$",
        views.get_or_update_challenge_phase_split,
        name="get_or_update_challenge_phase_split",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/$",
        views.star_challenge,
        name="star_challenge",
    ),
    url(
        r"^get_broker_url/(?P<challenge_pk>[0-9]+)/$",
        views.get_broker_url_by_challenge_pk,
        name="get_broker_url_by_challenge_pk",
    ),
    url(r"^get_broker_urls/$", views.get_broker_urls, name="get_broker_urls"),
    url(
        r"^phases/(?P<phase_pk>[0-9]+)/participant_team/aws/credentials/$",
        views.get_aws_credentials_for_participant_team,
        name="get_aws_credentials_for_participant_team",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/send-invitation/$",
        views.invite_users_to_challenge,
        name="invite_users_to_challenge",
    ),
    url(
        r"^(?P<invitation_key>[\w-]+)/accept-invitation/$",
        views.accept_challenge_invitation,
        name="accept_challenge_invitation",
    ),
    url(
        r"^challenge/queues/(?P<queue_name>[\w-]+)/$",
        views.get_challenge_by_queue_name,
        name="get_challenge_by_queue_name",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/phases/$",
        views.get_challenge_phases_by_challenge_pk,
        name="get_challenge_phases_by_challenge_pk",
    ),
    url(
        r"^challenge/phase/(?P<pk>[0-9]+)/$",
        views.get_challenge_phase_by_pk,
        name="get_challenge_phase_by_pk",
    ),
    url(
        r"^phase/(?P<slug>[\w-]+)/$",
        views.get_challenge_phase_by_slug,
        name="get_challenge_phase_by_slug",
    ),
    url(
        r"^phase/environment/(?P<slug>[\w-]+)/$",
        views.get_challenge_phase_environment_url,
        name="get_challenge_phase_environment_url",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/evaluation_cluster/$",
        views.get_challenge_evaluation_cluster_details,
        name="get_challenge_evaluation_cluster_details",
    ),
    url(
        r"^challenge/challenge_host_team/(?P<challenge_host_team_pk>[0-9]+)/validate_challenge_config/$",
        views.validate_challenge_config,
        name="validate_challenge_config",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/get_worker_logs/$",
        views.get_worker_logs,
        name="get_worker_logs",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/manage_worker/(?P<action>[\w-]+)/$",
        views.manage_worker,
        name="manage_worker",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/manage_ec2_instance/(?P<action>[\w-]+)/$",
        views.manage_ec2_instance,
        name="manage_ec2_instance",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/get_ec2_instance_details/$",
        views.get_ec2_instance_details,
        name="get_ec2_instance_details",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/create_ec2_instance/$",
        views.create_ec2_instance_by_challenge_pk,
        name="create_ec2_instance_by_challenge_pk",
    ),
    url(
        r"^(?P<challenge_pk>[0-9]+)/delete_ec2_instance/$",
        views.delete_ec2_instance_by_challenge_pk,
        name="delete_ec2_instance_by_challenge_pk",
    ),
    url(
        r"^phases/(?P<challenge_phase_pk>[0-9]+)/get_annotation_file_presigned_url/$",
        views.get_annotation_file_presigned_url,
        name="get_annotation_file_presigned_url",
    ),
    url(
        r"challenge/challenge_host_team/(?P<challenge_host_team_pk>[0-9]+)/create_or_update_github_challenge/$",
        views.create_or_update_github_challenge,
        name="create_or_update_github_challenge",
    ),
    url(
        r"challenge/challenge_host_team/(?P<challenge_host_team_pk>[0-9]+)/create_or_update_challenge/$",
        views.create_or_update_challenge,
        name="create_or_update_challenge",
    ),
    url(
        r"challenge/challenge_host_team/(?P<challenge_host_team_pk>[0-9]+)/challenges/(?P<challenge_pk>[0-9]+)/create_or_update_challenge_phase/$",
        views.create_or_update_challenge_phase,
        name="create_or_update_challenge_phase",
    ),
    url(
        r"^get_all_challenge_templates/$",
        views.get_all_challenge_templates,
        name="get_all_challenge_templates",
    ),
    url(
        r"^phases/(?P<challenge_phase_pk>[0-9]+)/finish_annotation_file_upload/$",
        views.finish_annotation_file_upload,
        name="finish_annotation_file_upload",
    ),
    url(
        r"^pwc_task_dataset/$", views.pwc_task_dataset, name="pwc_task_dataset"
    ),
    url(
        r"^challenges/(?P<challenge_pk>[0-9]+)/phases/(?P<phase_pk>[0-9]+)/allowed_email_ids/$",
        views.update_allowed_email_ids,
        name="get_or_update_allowed_email_ids",
    ),
    url(
        r"(?P<challenge_pk>[0-9]+)/scale_resources/$",
        views.scale_resources_by_challenge_pk,
        name="scale_resources_by_challenge_pk",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/get_participant_teams/$",
        views.get_participant_teams_for_challenge,
        name="get_participant_teams_for_challenge",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/approve_participant_team/(?P<participant_team_pk>[0-9]+)$",
        views.add_participant_team_to_approved_list,
        name="add_participant_team_to_approved_list",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/disapprove_participant_team/(?P<participant_team_pk>[0-9]+)$",
        views.remove_participant_team_from_approved_list,
        name="remove_participant_team_from_approved_list",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/deregister/$",
        views.deregister_participant_team_from_challenge,
        name="deregister_participant_team_from_challenge",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/update_challenge_tags_and_domain/$",
        views.update_challenge_tags_and_domain,
        name="update_challenge_tags_and_domain",
    ),
    url(
        r"^challenge/get_domain_choices/$",
        views.get_domain_choices,
        name="get_domain_choices",
    ),
    url(
        r"^challenge/(?P<challenge_phase_split_pk>[0-9]+)/get_leaderboard_data/$",
        views.get_leaderboard_data,
        name="get_leaderboard_data",
    ),
    url(
        r"^challenge/update_challenge_approval/$",
        views.update_challenge_approval,
        name="update_challenge_approval",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/prizes/$",
        views.get_prizes_by_challenge,
        name="get_prizes_by_challenge",
    ),
    url(
        r"^challenge/(?P<challenge_pk>[0-9]+)/sponsors/$",
        views.get_sponsors_by_challenge,
        name="get_sponsors_by_challenge",
    ),
    url(
        r"^challenge/modify_leaderboard_data/$",
        views.modify_leaderboard_data,
        name="modify_leaderboard_data",
    )
]

app_name = "challenges"
